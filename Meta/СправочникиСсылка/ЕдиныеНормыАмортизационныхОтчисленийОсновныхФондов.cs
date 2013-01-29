
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("19a5247c-7802-4130-9b4c-82aba5713696");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190818.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public decimal/*6*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(4.2)*/ НормаАмортизационныхОтчислений {get;set;}//Норма амортизационных отчислений (в процентах к балансовой стоимости)
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(4.2)*/ ПроцентОтСтоимостиМашины {get;set;}//Процент от стоимости машины на 1000 км пробега

		public V82.СправочникиОбъект.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НормаАмортизационныхОтчислений = НормаАмортизационныхОтчислений;
			Объект.ПроцентОтСтоимостиМашины = ПроцентОтСтоимостиМашины;
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
