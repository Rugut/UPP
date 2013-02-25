
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
	public partial class ГодовыеГрафикиАмортизацииОС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("01cfb766-298c-418c-809b-5e4319699d61");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191533.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}//Прочие сведения
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент1 {get;set;}//Январь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент2 {get;set;}//Февраль
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент3 {get;set;}//Март
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент4 {get;set;}//Апрель
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент5 {get;set;}//Май
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент6 {get;set;}//Июнь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент7 {get;set;}//Июль
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент8 {get;set;}//Август
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент9 {get;set;}//Сентябрь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент10 {get;set;}//Октябрь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент11 {get;set;}//Ноябрь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент12 {get;set;}//Декабрь
		
		public ГодовыеГрафикиАмортизацииОС()
		{
		}
		
		public ГодовыеГрафикиАмортизацииОС(byte[] УникальныйИдентификатор)
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
					,_Fld2029 [Комментарий]
					,_Fld2030 [Коэффициент1]
					,_Fld2031 [Коэффициент2]
					,_Fld2032 [Коэффициент3]
					,_Fld2033 [Коэффициент4]
					,_Fld2034 [Коэффициент5]
					,_Fld2035 [Коэффициент6]
					,_Fld2036 [Коэффициент7]
					,_Fld2037 [Коэффициент8]
					,_Fld2038 [Коэффициент9]
					,_Fld2039 [Коэффициент10]
					,_Fld2040 [Коэффициент11]
					,_Fld2041 [Коэффициент12]
					From _Reference71(NOLOCK)
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
							Комментарий = Читалка.GetString(6);
							Коэффициент1 = Читалка.GetDecimal(7);
							Коэффициент2 = Читалка.GetDecimal(8);
							Коэффициент3 = Читалка.GetDecimal(9);
							Коэффициент4 = Читалка.GetDecimal(10);
							Коэффициент5 = Читалка.GetDecimal(11);
							Коэффициент6 = Читалка.GetDecimal(12);
							Коэффициент7 = Читалка.GetDecimal(13);
							Коэффициент8 = Читалка.GetDecimal(14);
							Коэффициент9 = Читалка.GetDecimal(15);
							Коэффициент10 = Читалка.GetDecimal(16);
							Коэффициент11 = Читалка.GetDecimal(17);
							Коэффициент12 = Читалка.GetDecimal(18);
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
		
		public V82.СправочникиОбъект.ГодовыеГрафикиАмортизацииОС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ГодовыеГрафикиАмортизацииОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Комментарий = Комментарий;
			Объект.Коэффициент1 = Коэффициент1;
			Объект.Коэффициент2 = Коэффициент2;
			Объект.Коэффициент3 = Коэффициент3;
			Объект.Коэффициент4 = Коэффициент4;
			Объект.Коэффициент5 = Коэффициент5;
			Объект.Коэффициент6 = Коэффициент6;
			Объект.Коэффициент7 = Коэффициент7;
			Объект.Коэффициент8 = Коэффициент8;
			Объект.Коэффициент9 = Коэффициент9;
			Объект.Коэффициент10 = Коэффициент10;
			Объект.Коэффициент11 = Коэффициент11;
			Объект.Коэффициент12 = Коэффициент12;
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