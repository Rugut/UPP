
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
	public partial class НастройкиРасчетаЦеныНоменклатуры:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f0684db4-392b-4b73-90b7-d9ad544ecc4e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191124.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Формировать документы автоматически (регламентным заданием)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public bool ФормироватьДокументыАвтоматически {get;set;}//Формировать документы автоматически
		///<summary>
		///Уникальный идентификатор регламентного задания
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(36)*/ РегламентноеЗадание {get;set;}//Регламентное задание
		[DataMember]
		[ProtoMember(10)]
		public ХранилищеЗначения НастройкиКомпоновщика {get;set;}//Настройки компоновщика
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыОтраженияВУчете ВидОтраженияВУчете {get;set;}//Использовать данные
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(1)*/ ПорядокФормированияЦены {get;set;}//Порядок формирования цены
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.НастройкиРасчетаСебестоимости НастройкаРасчетаСебестоимости {get;set;}//Настройка расчета себестоимости
		[DataMember]
		[ProtoMember(16)]
		public bool СоздаватьНовыйДокумент {get;set;}//Создавать новый документ

		public V82.СправочникиОбъект.НастройкиРасчетаЦеныНоменклатуры  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиРасчетаЦеныНоменклатуры();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.ФормироватьДокументыАвтоматически = ФормироватьДокументыАвтоматически;
			Объект.РегламентноеЗадание = РегламентноеЗадание;
			Объект.НастройкиКомпоновщика = НастройкиКомпоновщика;
			Объект.ТипЦен = ТипЦен;
			Объект.ВидОтраженияВУчете = ВидОтраженияВУчете;
			Объект.ПорядокФормированияЦены = ПорядокФормированияЦены;
			Объект.Комментарий = Комментарий;
			Объект.НастройкаРасчетаСебестоимости = НастройкаРасчетаСебестоимости;
			Объект.СоздаватьНовыйДокумент = СоздаватьНовыйДокумент;
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