
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class НалоговыеОрганы:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		public Guid Ссылка;
		public long Версия;
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления;
		public bool Предопределенный;
		public Guid Владелец;
		public bool ЭтоГруппа;
		public Guid Родитель;
		public string/*4*/ Код;
		public string/*120*/ Наименование;
		public V82.СправочникиСсылка.ВидыНалоговыхОрганов Вид;//Вид налогового органа
		public string/*(250)*/ ПолноеНаименование;//Полное наименование
		public bool УчетНалогоплательщиков;//Учет налогоплательщиков
		public bool ПриемНалоговойОтчетности;//Прием налоговой отчетности
		public string/*(10)*/ ИНН;
		public string/*(9)*/ КПП;
		public string/*(128)*/ Адрес;
		public string/*(64)*/ Телефон;
		public string/*(64)*/ АдресЭлектроннойПочты;//Адрес электронной почты
		public string/*(64)*/ АдресСайта;//Адрес сайта
		public string/*(250)*/ Комментарий;
		public string/*(40)*/ УдалитьСертификат;//Удалить сертификат
		public string/*(254)*/ АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками;//Адрес электронной почты для целей документооборота с налогоплательщиками
		public void Записать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference144(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Code
						,_Description
						,_Fld2574RRef
						,_Fld2575
						,_Fld2576
						,_Fld2577
						,_Fld2578
						,_Fld2579
						,_Fld2580
						,_Fld2581
						,_Fld2582
						,_Fld2583
						,_Fld2584
						,_Fld2585
						,_Fld2586)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@Код
						,@Наименование
						,@Вид
						,@ПолноеНаименование
						,@УчетНалогоплательщиков
						,@ПриемНалоговойОтчетности
						,@ИНН
						,@КПП
						,@Адрес
						,@Телефон
						,@АдресЭлектроннойПочты
						,@АдресСайта
						,@Комментарий
						,@УдалитьСертификат
						,@АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference144
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2574RRef	= @Вид
						,_Fld2575	= @ПолноеНаименование
						,_Fld2576	= @УчетНалогоплательщиков
						,_Fld2577	= @ПриемНалоговойОтчетности
						,_Fld2578	= @ИНН
						,_Fld2579	= @КПП
						,_Fld2580	= @Адрес
						,_Fld2581	= @Телефон
						,_Fld2582	= @АдресЭлектроннойПочты
						,_Fld2583	= @АдресСайта
						,_Fld2584	= @Комментарий
						,_Fld2585	= @УдалитьСертификат
						,_Fld2586	= @АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Вид", Вид.Ссылка);
					Команда.Parameters.AddWithValue("ПолноеНаименование", ПолноеНаименование);
					Команда.Parameters.AddWithValue("УчетНалогоплательщиков", УчетНалогоплательщиков);
					Команда.Parameters.AddWithValue("ПриемНалоговойОтчетности", ПриемНалоговойОтчетности);
					Команда.Parameters.AddWithValue("ИНН", ИНН);
					Команда.Parameters.AddWithValue("КПП", КПП);
					Команда.Parameters.AddWithValue("Адрес", Адрес);
					Команда.Parameters.AddWithValue("Телефон", Телефон);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочты", АдресЭлектроннойПочты);
					Команда.Parameters.AddWithValue("АдресСайта", АдресСайта);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УдалитьСертификат", УдалитьСертификат);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками", АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference144
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}