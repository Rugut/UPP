
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
	[ProtoContract]
	[DataContract]
	public partial class РегламентированныеОтчеты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("14f10944-2eeb-4570-a546-254c9efbd477");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191628.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*6*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(255)*/ ИсточникОтчета {get;set;}//Источник отчета
		[DataMember]
		[ProtoMember(10)]
		public bool НеПоказыватьВСписке {get;set;}//Не показывать в списке
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public bool ВнешнийОтчетИспользовать {get;set;}//Использовать внешний отчет
		[DataMember]
		[ProtoMember(13)]
		public ХранилищеЗначения ВнешнийОтчетХранилище {get;set;}//Хранилище с внешним отчетом
		[DataMember]
		[ProtoMember(14)]
		public ХранилищеЗначения Периоды {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public string/*(32)*/ ВнешнийОтчетВерсия {get;set;}//Версия внешнего отчета

		public V82.СправочникиОбъект.РегламентированныеОтчеты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.РегламентированныеОтчеты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ИсточникОтчета = ИсточникОтчета;
			Объект.НеПоказыватьВСписке = НеПоказыватьВСписке;
			Объект.Описание = Описание;
			Объект.ВнешнийОтчетИспользовать = ВнешнийОтчетИспользовать;
			Объект.ВнешнийОтчетХранилище = ВнешнийОтчетХранилище;
			Объект.Периоды = Периоды;
			Объект.ВнешнийОтчетВерсия = ВнешнийОтчетВерсия;
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
