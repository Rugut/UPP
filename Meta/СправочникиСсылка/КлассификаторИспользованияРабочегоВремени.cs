
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КлассификаторИспользованияРабочегоВремени:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("789cf997-385d-45fc-8e83-80b6fb4feef0");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012000.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		public string/*(2)*/ БуквенныйКод {get;set;}//Буквенный код
		public string/*(2)*/ ЦифровойКод {get;set;}//Цифровой код
		public string/*(0)*/ ПолноеНаименование {get;set;}//Полное наименование
		public V82.Перечисления/*Ссылка*/.ВидыВремени УдалитьВидВремени {get;set;}//Удалить вид времени
		public bool РабочееВремя {get;set;}//Рабочее время
		
		public КлассификаторИспользованияРабочегоВремени()
		{
		}
		
		public КлассификаторИспользованияРабочегоВремени(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public КлассификаторИспользованияРабочегоВремени(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld1205 [БуквенныйКод]
					,_Fld1206 [ЦифровойКод]
					,_Fld1207 [ПолноеНаименование]
					,_Fld1208RRef [УдалитьВидВремени]
					,_Fld21239 [РабочееВремя]
					From _Reference70(NOLOCK)
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
								БуквенныйКод = Читалка.GetString(5);
								ЦифровойКод = Читалка.GetString(6);
								ПолноеНаименование = Читалка.GetString(7);
								УдалитьВидВремени = V82.Перечисления/*Ссылка*/.ВидыВремени.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
								РабочееВремя = ((byte[])Читалка.GetValue(9))[0]==1;
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
		
		public V82.СправочникиОбъект.КлассификаторИспользованияРабочегоВремени  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КлассификаторИспользованияРабочегоВремени();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.БуквенныйКод = БуквенныйКод;
			Объект.ЦифровойКод = ЦифровойКод;
			Объект.ПолноеНаименование = ПолноеНаименование;
			Объект.УдалитьВидВремени = УдалитьВидВремени;
			Объект.РабочееВремя = РабочееВремя;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.КлассификаторИспользованияРабочегоВремени ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.КлассификаторИспользованияРабочегоВремени)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.КлассификаторИспользованияРабочегоВремени(УникальныйИдентификатор);
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