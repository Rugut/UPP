
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
	[ProtoContract]
	[DataContract]
	public partial class ТиповыеАнкеты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("92ef7e72-e19a-40ab-8194-21b5a7bb1005");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011953.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		public bool ЗагружатьОбъекты {get;set;}//Загружать объекты
		public ХранилищеЗначения МакетАнкеты {get;set;}//Макет анкеты
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовЗагружаемыхИзОпроса ВидСправочникаДляЗагрузки {get;set;}//Вид справочника для загрузки
		///<summary>
		///Установка данного флажка говорит о том, что анкета будет предназначена конкретным людям
		///</summary>
		public bool Адресная {get;set;}
		public string/*(200)*/ НаименованиеАнкеты {get;set;}//Наименование анкеты
		public string/*(0)*/ Вступление {get;set;}
		public bool ЗаполнятьАнкетуДанными {get;set;}//Заполнять анкету данными
		public V82.Перечисления/*Ссылка*/.ВидыАнкет ВидАнкеты {get;set;}//Вид анкеты
		public decimal/*(5)*/ СекундОтвета {get;set;}//Секунд ответа
		
		public ТиповыеАнкеты()
		{
		}
		
		public ТиповыеАнкеты(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ТиповыеАнкеты(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2066 [ЗагружатьОбъекты]
					,_Fld2067 [МакетАнкеты]
					,_Fld2068RRef [ВидСправочникаДляЗагрузки]
					,_Fld2069 [Адресная]
					,_Fld2070 [НаименованиеАнкеты]
					,_Fld2071 [Вступление]
					,_Fld21289 [ЗаполнятьАнкетуДанными]
					,_Fld21290RRef [ВидАнкеты]
					,_Fld21291 [СекундОтвета]
					From _Reference178(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  and _Folder = 0x01  ";
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
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							ЗагружатьОбъекты = ((byte[])Читалка.GetValue(6))[0]==1;
							ВидСправочникаДляЗагрузки = V82.Перечисления/*Ссылка*/.ВидыОбъектовЗагружаемыхИзОпроса.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Адресная = ((byte[])Читалка.GetValue(9))[0]==1;
							НаименованиеАнкеты = Читалка.GetString(10);
							Вступление = Читалка.GetString(11);
							ЗаполнятьАнкетуДанными = ((byte[])Читалка.GetValue(12))[0]==1;
							ВидАнкеты = V82.Перечисления/*Ссылка*/.ВидыАнкет.ПустаяСсылка.Получить((byte[])Читалка.GetValue(13));
							СекундОтвета = Читалка.GetDecimal(14);
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
		
		public V82.СправочникиОбъект.ТиповыеАнкеты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТиповыеАнкеты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ЗагружатьОбъекты = ЗагружатьОбъекты;
			Объект.МакетАнкеты = МакетАнкеты;
			Объект.ВидСправочникаДляЗагрузки = ВидСправочникаДляЗагрузки;
			Объект.Адресная = Адресная;
			Объект.НаименованиеАнкеты = НаименованиеАнкеты;
			Объект.Вступление = Вступление;
			Объект.ЗаполнятьАнкетуДанными = ЗаполнятьАнкетуДанными;
			Объект.ВидАнкеты = ВидАнкеты;
			Объект.СекундОтвета = СекундОтвета;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ТиповыеАнкеты ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ТиповыеАнкеты)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ТиповыеАнкеты(УникальныйИдентификатор);
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