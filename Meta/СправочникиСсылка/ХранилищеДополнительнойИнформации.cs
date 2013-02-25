
using System;
using System.IO;
using System.Data.SqlClient;
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
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Вид данных
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыДополнительнойИнформацииОбъектов ВидДанных {get;set;}//Вид данных
		///<summary>
		///Имя файла
		///</summary>
		public string/*(0)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Объект
		///</summary>
		public object Объект {get;set;}
		///<summary>
		///Хранилище
		///</summary>
		public ХранилищеЗначения Хранилище {get;set;}
		public ХранилищеЗначения ТекстФайла {get;set;}//Текст файла
		
		public ХранилищеДополнительнойИнформации()
		{
		}
		
		public ХранилищеДополнительнойИнформации(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld4215RRef [ВидДанных]
					,_Fld4216 [ИмяФайла]
					,_Fld4217_TYPE [Объект_Тип],_Fld4217_RRRef [Объект],_Fld4217_RTRef [Объект_Вид]
					,_Fld4218 [Хранилище]
					,_Fld4219 [ТекстФайла]
					From _Reference288(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Наименование = Читалка.GetString(4);
							ВидДанных = V82.Перечисления/*Ссылка*/.ВидыДополнительнойИнформацииОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(5));
							ИмяФайла = Читалка.GetString(6);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
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