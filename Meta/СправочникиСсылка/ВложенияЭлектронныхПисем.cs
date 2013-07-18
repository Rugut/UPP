
using System;
using System.Collections;
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
	///Вложения электронных писем
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВложенияЭлектронныхПисем:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("e17fb3af-3331-4fa2-995a-a185ea2277c3");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012003.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///Объект
		///</summary>
		public V82.ДокументыСсылка.ЭлектронноеПисьмо Объект {get;set;}
		///<summary>
		///Имя файла
		///</summary>
		public string/*(0)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Хранилище
		///</summary>
		public ХранилищеЗначения Хранилище {get;set;}
		public string/*(200)*/ ИДФайлаПочтовогоПисьма {get;set;}//ИДФайла почтового письма
		public object Предмет {get;set;}
		public ХранилищеЗначения ТекстФайла {get;set;}//Текст файла
		
		public ВложенияЭлектронныхПисем()
		{
		}
		
		public ВложенияЭлектронныхПисем(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ВложенияЭлектронныхПисем(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
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
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
								//Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								ИмяФайла = Читалка.GetString(6);
								ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
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
		
		public V82.СправочникиОбъект.ВложенияЭлектронныхПисем  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВложенияЭлектронныхПисем();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ИмяФайла = ИмяФайла;
			Объект.Хранилище = Хранилище;
			Объект.ИДФайлаПочтовогоПисьма = ИДФайлаПочтовогоПисьма;
			Объект.Предмет = Предмет;
			Объект.ТекстФайла = ТекстФайла;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ВложенияЭлектронныхПисем ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ВложенияЭлектронныхПисем)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ВложенияЭлектронныхПисем(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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