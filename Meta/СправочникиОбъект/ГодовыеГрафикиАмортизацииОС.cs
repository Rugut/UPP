
using System;
using System.Data.SqlClient;
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class ГодовыеГрафикиАмортизацииОС:СправочникОбъект
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
		public string/*9*/ Код;
		public string/*50*/ Наименование;
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ Комментарий;//Прочие сведения
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент1;//Январь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент2;//Февраль
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент3;//Март
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент4;//Апрель
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент5;//Май
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент6;//Июнь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент7;//Июль
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент8;//Август
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент9;//Сентябрь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент10;//Октябрь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент11;//Ноябрь
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(6.3)*/ Коэффициент12;//Декабрь
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
						Insert Into _Reference71(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2029
						,_Fld2030
						,_Fld2031
						,_Fld2032
						,_Fld2033
						,_Fld2034
						,_Fld2035
						,_Fld2036
						,_Fld2037
						,_Fld2038
						,_Fld2039
						,_Fld2040
						,_Fld2041)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Комментарий
						,@Коэффициент1
						,@Коэффициент2
						,@Коэффициент3
						,@Коэффициент4
						,@Коэффициент5
						,@Коэффициент6
						,@Коэффициент7
						,@Коэффициент8
						,@Коэффициент9
						,@Коэффициент10
						,@Коэффициент11
						,@Коэффициент12)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference71
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2029	= @Комментарий
						,_Fld2030	= @Коэффициент1
						,_Fld2031	= @Коэффициент2
						,_Fld2032	= @Коэффициент3
						,_Fld2033	= @Коэффициент4
						,_Fld2034	= @Коэффициент5
						,_Fld2035	= @Коэффициент6
						,_Fld2036	= @Коэффициент7
						,_Fld2037	= @Коэффициент8
						,_Fld2038	= @Коэффициент9
						,_Fld2039	= @Коэффициент10
						,_Fld2040	= @Коэффициент11
						,_Fld2041	= @Коэффициент12
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Коэффициент1", Коэффициент1);
					Команда.Parameters.AddWithValue("Коэффициент2", Коэффициент2);
					Команда.Parameters.AddWithValue("Коэффициент3", Коэффициент3);
					Команда.Parameters.AddWithValue("Коэффициент4", Коэффициент4);
					Команда.Parameters.AddWithValue("Коэффициент5", Коэффициент5);
					Команда.Parameters.AddWithValue("Коэффициент6", Коэффициент6);
					Команда.Parameters.AddWithValue("Коэффициент7", Коэффициент7);
					Команда.Parameters.AddWithValue("Коэффициент8", Коэффициент8);
					Команда.Parameters.AddWithValue("Коэффициент9", Коэффициент9);
					Команда.Parameters.AddWithValue("Коэффициент10", Коэффициент10);
					Команда.Parameters.AddWithValue("Коэффициент11", Коэффициент11);
					Команда.Parameters.AddWithValue("Коэффициент12", Коэффициент12);
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
					Команда.CommandText = @"Delete _Reference71
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}