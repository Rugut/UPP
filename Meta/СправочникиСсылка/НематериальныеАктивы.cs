
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НематериальныеАктивы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("45294aaa-7026-40e4-9321-373e50781ccb");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191527.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыНМА ВидНМА {get;set;}//Вид НМА
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.АмортизационныеГруппы АмортизационнаяГруппа {get;set;}//Амортизационная группа
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ ПрочиеСведения {get;set;}//Прочие сведения
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовУчетаНМА ВидОбъектаУчета {get;set;}//Вид объекта учета
		
		public НематериальныеАктивы()
		{
		}
		
		public НематериальныеАктивы(byte[] УникальныйИдентификатор)
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
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2898 [НаименованиеПолное]
					,_Fld2899RRef [ВидНМА]
					,_Fld2900RRef [АмортизационнаяГруппа]
					,_Fld2901 [ПрочиеСведения]
					,_Fld2902RRef [ВидОбъектаУчета]
					From _Reference161(NOLOCK)
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
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							НаименованиеПолное = Читалка.GetString(6);
							ВидНМА = V82.Перечисления/*Ссылка*/.ВидыНМА.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							АмортизационнаяГруппа = V82.Перечисления/*Ссылка*/.АмортизационныеГруппы.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							ПрочиеСведения = Читалка.GetString(9);
							ВидОбъектаУчета = V82.Перечисления/*Ссылка*/.ВидыОбъектовУчетаНМА.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
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
		
		public V82.СправочникиОбъект.НематериальныеАктивы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НематериальныеАктивы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НаименованиеПолное = НаименованиеПолное;
			Объект.ВидНМА = ВидНМА;
			Объект.АмортизационнаяГруппа = АмортизационнаяГруппа;
			Объект.ПрочиеСведения = ПрочиеСведения;
			Объект.ВидОбъектаУчета = ВидОбъектаУчета;
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