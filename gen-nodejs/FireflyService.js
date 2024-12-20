//
// Autogenerated by Thrift Compiler (0.17.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
const thrift = require('thrift');
const Thrift = thrift.Thrift;
const Int64 = require('node-int64');


const ttypes = require('./firefly_types');
//HELPER FUNCTIONS AND STRUCTURES

const FireflyService_getPhaseByFireflyPosition_args = class {
  constructor(args) {
    this.position = null;
    if (args) {
      if (args.position !== undefined && args.position !== null) {
        this.position = new ttypes.Position(args.position);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.position = new ttypes.Position();
          this.position.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('FireflyService_getPhaseByFireflyPosition_args');
    if (this.position !== null && this.position !== undefined) {
      output.writeFieldBegin('position', Thrift.Type.STRUCT, 1);
      this.position.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const FireflyService_getPhaseByFireflyPosition_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.DOUBLE) {
          this.success = input.readDouble();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('FireflyService_getPhaseByFireflyPosition_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.DOUBLE, 0);
      output.writeDouble(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const FireflyService_sendPhaseUpdate_args = class {
  constructor(args) {
    this.firefly = null;
    if (args) {
      if (args.firefly !== undefined && args.firefly !== null) {
        this.firefly = new ttypes.Firefly(args.firefly);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.firefly = new ttypes.Firefly();
          this.firefly.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('FireflyService_sendPhaseUpdate_args');
    if (this.firefly !== null && this.firefly !== undefined) {
      output.writeFieldBegin('firefly', Thrift.Type.STRUCT, 1);
      this.firefly.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const FireflyService_sendPhaseUpdate_result = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('FireflyService_sendPhaseUpdate_result');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const FireflyService_getFireflies_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('FireflyService_getFireflies_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const FireflyService_getFireflies_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [ttypes.Firefly]);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp31 = input.readListBegin();
          const _size0 = _rtmp31.size || 0;
          for (let _i2 = 0; _i2 < _size0; ++_i2) {
            let elem3 = null;
            elem3 = new ttypes.Firefly();
            elem3.read(input);
            this.success.push(elem3);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('FireflyService_getFireflies_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter4 in this.success) {
        if (this.success.hasOwnProperty(iter4)) {
          iter4 = this.success[iter4];
          iter4.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const FireflyServiceClient = exports.Client = class FireflyServiceClient {
  constructor(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }
  seqid () { return this._seqid; }
  new_seqid () { return this._seqid += 1; }

  getPhaseByFireflyPosition (position) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_getPhaseByFireflyPosition(position);
    });
  }

  send_getPhaseByFireflyPosition (position) {
    const output = new this.pClass(this.output);
    const params = {
      position: position
    };
    const args = new FireflyService_getPhaseByFireflyPosition_args(params);
    try {
      output.writeMessageBegin('getPhaseByFireflyPosition', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_getPhaseByFireflyPosition (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new FireflyService_getPhaseByFireflyPosition_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('getPhaseByFireflyPosition failed: unknown result');
  }

  sendPhaseUpdate (firefly) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_sendPhaseUpdate(firefly);
    });
  }

  send_sendPhaseUpdate (firefly) {
    const output = new this.pClass(this.output);
    const params = {
      firefly: firefly
    };
    const args = new FireflyService_sendPhaseUpdate_args(params);
    try {
      output.writeMessageBegin('sendPhaseUpdate', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_sendPhaseUpdate (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new FireflyService_sendPhaseUpdate_result();
    result.read(input);
    input.readMessageEnd();

    callback(null);
  }

  getFireflies () {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_getFireflies();
    });
  }

  send_getFireflies () {
    const output = new this.pClass(this.output);
    const args = new FireflyService_getFireflies_args();
    try {
      output.writeMessageBegin('getFireflies', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_getFireflies (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new FireflyService_getFireflies_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('getFireflies failed: unknown result');
  }
};
const FireflyServiceProcessor = exports.Processor = class FireflyServiceProcessor {
  constructor(handler) {
    this._handler = handler;
  }
  process (input, output) {
    const r = input.readMessageBegin();
    if (this['process_' + r.fname]) {
      return this['process_' + r.fname].call(this, r.rseqid, input, output);
    } else {
      input.skip(Thrift.Type.STRUCT);
      input.readMessageEnd();
      const x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
      output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
      x.write(output);
      output.writeMessageEnd();
      output.flush();
    }
  }
  process_getPhaseByFireflyPosition (seqid, input, output) {
    const args = new FireflyService_getPhaseByFireflyPosition_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.getPhaseByFireflyPosition.length === 1) {
      Promise.resolve(this._handler.getPhaseByFireflyPosition.bind(this._handler)(
        args.position
      )).then(result => {
        const result_obj = new FireflyService_getPhaseByFireflyPosition_result({success: result});
        output.writeMessageBegin("getPhaseByFireflyPosition", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPhaseByFireflyPosition", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.getPhaseByFireflyPosition(args.position, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new FireflyService_getPhaseByFireflyPosition_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("getPhaseByFireflyPosition", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPhaseByFireflyPosition", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_sendPhaseUpdate (seqid, input, output) {
    const args = new FireflyService_sendPhaseUpdate_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.sendPhaseUpdate.length === 1) {
      Promise.resolve(this._handler.sendPhaseUpdate.bind(this._handler)(
        args.firefly
      )).then(result => {
        const result_obj = new FireflyService_sendPhaseUpdate_result({success: result});
        output.writeMessageBegin("sendPhaseUpdate", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendPhaseUpdate", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.sendPhaseUpdate(args.firefly, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new FireflyService_sendPhaseUpdate_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("sendPhaseUpdate", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendPhaseUpdate", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_getFireflies (seqid, input, output) {
    const args = new FireflyService_getFireflies_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.getFireflies.length === 0) {
      Promise.resolve(this._handler.getFireflies.bind(this._handler)(
      )).then(result => {
        const result_obj = new FireflyService_getFireflies_result({success: result});
        output.writeMessageBegin("getFireflies", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getFireflies", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.getFireflies((err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new FireflyService_getFireflies_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("getFireflies", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getFireflies", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
};
