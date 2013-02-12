
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
	///Торговое оборудование, которое может быть подключено.
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТорговоеОборудование:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("bb1d891f-7afa-4880-8777-34284cfcc258");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191427.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Используемая обработка обслуживания торгового оборудования.
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public V82.СправочникиСсылка.ОбработкиОбслуживанияТО ОбработкаОбслуживания {get;set;}//Обработка обслуживания
		///<summary>
		///Модель торгового оборудования.
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(256)*/ Модель {get;set;}

		public V82.СправочникиОбъект.ТорговоеОборудование  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТорговоеОборудование();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ОбработкаОбслуживания = ОбработкаОбслуживания;
			Объект.Модель = Модель;
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