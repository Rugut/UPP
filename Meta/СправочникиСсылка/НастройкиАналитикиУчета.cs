
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
	public partial class НастройкиАналитикиУчета:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("499ec507-a418-47ff-8f7e-37d01c34e0f5");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190709.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*25*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*50*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public bool УправленческийУчет {get;set;}//Управленческий учет
		[DataMember]
		[ProtoMember(10)]
		public bool РегламентированныйУчет {get;set;}//Регламентированный учет
		[DataMember]
		[ProtoMember(11)]
		public object ЗначениеПоУмолчанию {get;set;}//Значение по умолчанию
		[DataMember]
		[ProtoMember(12)]
		public bool ТолькоПросмотр {get;set;}//Только просмотр
		[DataMember]
		[ProtoMember(13)]
		public bool ТолькоПросмотрРегл {get;set;}//Только просмотр регл.

		public V82.СправочникиОбъект.НастройкиАналитикиУчета  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиАналитикиУчета();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.УправленческийУчет = УправленческийУчет;
			Объект.РегламентированныйУчет = РегламентированныйУчет;
			Объект.ЗначениеПоУмолчанию = ЗначениеПоУмолчанию;
			Объект.ТолькоПросмотр = ТолькоПросмотр;
			Объект.ТолькоПросмотрРегл = ТолькоПросмотрРегл;
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
