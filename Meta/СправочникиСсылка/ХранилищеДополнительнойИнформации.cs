
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
	///Хранилище дополнительной информации
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ХранилищеДополнительнойИнформации:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("643bfde6-77a8-4438-874d-733071adf65e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191529.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Вид данных
		///</summary>
		[DataMember]
		[ProtoMember(6)]
		public V82.Перечисления/*Ссылка*/.ВидыДополнительнойИнформацииОбъектов ВидДанных {get;set;}//Вид данных
		///<summary>
		///Имя файла
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public string/*(0)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Объект
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public object Объект {get;set;}
		///<summary>
		///Хранилище
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public ХранилищеЗначения Хранилище {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public ХранилищеЗначения ТекстФайла {get;set;}//Текст файла

		public V82.СправочникиОбъект.ХранилищеДополнительнойИнформации  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ХранилищеДополнительнойИнформации();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ВидДанных = ВидДанных;
			Объект.ИмяФайла = ИмяФайла;
			Объект.Объект = Объект;
			Объект.Хранилище = Хранилище;
			Объект.ТекстФайла = ТекстФайла;
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
