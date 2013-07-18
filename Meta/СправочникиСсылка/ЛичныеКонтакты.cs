
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
	public partial class ЛичныеКонтакты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("ca556363-c5ed-410e-b7ab-870ff6ba498e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012009.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public string/*(50)*/ Фамилия {get;set;}
		public string/*(50)*/ Имя {get;set;}
		public string/*(50)*/ Отчество {get;set;}
		public DateTime ДатаРождения {get;set;}//Дата рождения
		public string/*(0)*/ Описание {get;set;}
		public bool НапоминатьОДнеРождения {get;set;}//Напоминать о дне рождения
		public decimal/*(2)*/ КоличествоДнейДоНапоминания {get;set;}//Количество дней до напоминания
		public V82.СправочникиСсылка.Пользователи ПользовательДляОграниченияПравДоступа {get;set;}//Пользователь для ограничения прав доступа
		
		public ЛичныеКонтакты()
		{
		}
		
		public ЛичныеКонтакты(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ЛичныеКонтакты(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld1312 [Фамилия]
					,_Fld1313 [Имя]
					,_Fld1314 [Отчество]
					,_Fld1315 [ДатаРождения]
					,_Fld1316 [Описание]
					,_Fld1317 [НапоминатьОДнеРождения]
					,_Fld1318 [КоличествоДнейДоНапоминания]
					,_Fld1319RRef [ПользовательДляОграниченияПравДоступа]
					From _Reference82(NOLOCK)
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
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
								Фамилия = Читалка.GetString(6);
								Имя = Читалка.GetString(7);
								Отчество = Читалка.GetString(8);
								ДатаРождения = Читалка.GetDateTime(9);
								Описание = Читалка.GetString(10);
								НапоминатьОДнеРождения = ((byte[])Читалка.GetValue(11))[0]==1;
								КоличествоДнейДоНапоминания = Читалка.GetDecimal(12);
								ПользовательДляОграниченияПравДоступа = new V82.СправочникиСсылка.Пользователи((byte[])Читалка.GetValue(13),Глубина+1);
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
		
		public V82.СправочникиОбъект.ЛичныеКонтакты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЛичныеКонтакты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Фамилия = Фамилия;
			Объект.Имя = Имя;
			Объект.Отчество = Отчество;
			Объект.ДатаРождения = ДатаРождения;
			Объект.Описание = Описание;
			Объект.НапоминатьОДнеРождения = НапоминатьОДнеРождения;
			Объект.КоличествоДнейДоНапоминания = КоличествоДнейДоНапоминания;
			Объект.ПользовательДляОграниченияПравДоступа = ПользовательДляОграниченияПравДоступа;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ЛичныеКонтакты ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ЛичныеКонтакты)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ЛичныеКонтакты(УникальныйИдентификатор);
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