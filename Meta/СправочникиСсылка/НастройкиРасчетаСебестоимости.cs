
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
	public partial class НастройкиРасчетаСебестоимости:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("00093a0e-bee2-408a-8995-cd1f5efe314b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191511.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.НастройкиЗакрытияМесяца НастройкаЗакрытияМесяца {get;set;}//Настройка закрытия месяца
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыОтраженияВУчете ВидОтраженияВУчете {get;set;}//Вид отражения в учете
		///<summary>
		///Формировать документы автоматически (регламентным заданием)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ФормироватьДокументыАвтоматически {get;set;}//Формировать документы автоматически
		///<summary>
		///Уникальный идентификатор регламентного задания
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(36)*/ РегламентноеЗадание {get;set;}//Регламентное задание
		///<summary>
		///Количество месяцев, на которое дата проводимого документа меньше текущей даты
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(2)*/ Задержка {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Комментарий {get;set;}

		public V82.СправочникиОбъект.НастройкиРасчетаСебестоимости  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиРасчетаСебестоимости();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.Организация = Организация;
			Объект.НастройкаЗакрытияМесяца = НастройкаЗакрытияМесяца;
			Объект.ВидОтраженияВУчете = ВидОтраженияВУчете;
			Объект.ФормироватьДокументыАвтоматически = ФормироватьДокументыАвтоматически;
			Объект.РегламентноеЗадание = РегламентноеЗадание;
			Объект.Задержка = Задержка;
			Объект.Комментарий = Комментарий;
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
