
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КассыККМ:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1f265156-c80e-4098-b38b-37cf4557aae2");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191302.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public Guid Владелец {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*50*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool ФормироватьНефискальныеЧеки {get;set;}//Формировать нефискальные чеки
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(2)*/ ШиринаЛенты {get;set;}//Ширина ленты
		[DataMember]
		[ProtoMember(10)]
		public bool РучнойРежимФормирования {get;set;}//Ручной режим формирования

		public V82.СправочникиОбъект.КассыККМ  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КассыККМ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ФормироватьНефискальныеЧеки = ФормироватьНефискальныеЧеки;
			Объект.ШиринаЛенты = ШиринаЛенты;
			Объект.РучнойРежимФормирования = РучнойРежимФормирования;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}