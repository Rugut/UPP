Ext.define('Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:515px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Медицинский страховой полис',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Серия полиса:',
			style: 'position:absolute;left:8px;top:133px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:145px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Номер полиса:',
			style: 'position:absolute;left:235px;top:133px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:372px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФизлицо',
			text: 'Физическое лицо:',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:145px;top:33px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСтрахования',
			text: 'Вид страхования:',
			style: 'position:absolute;left:8px;top:83px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтрахования',
			style: 'position:absolute;left:145px;top:83px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиПолиса',
			text: 'Дата выдачи полиса:',
			style: 'position:absolute;left:8px;top:158px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиПолиса',
			style: 'position:absolute;left:145px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияПолиса',
			text: 'Дата окончания полиса:',
			style: 'position:absolute;left:235px;top:158px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПолиса',
			style: 'position:absolute;left:372px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрограммаСтрахования',
			text: 'Программа страхования:',
			style: 'position:absolute;left:8px;top:108px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрограммаСтрахования',
			style: 'position:absolute;left:145px;top:108px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодственник',
			text: 'Родственник:',
			style: 'position:absolute;left:8px;top:205px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родственник',
			style: 'position:absolute;left:145px;top:205px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:8px;top:256px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:145px;top:256px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:235px;top:256px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:372px;top:256px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУдостоверениеЛичности',
			text: 'Удостоверение личности:',
			style: 'position:absolute;left:8px;top:281px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УдостоверениеЛичностиПредставление',
			style: 'position:absolute;left:145px;top:281px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресФактический',
			text: 'Адрес фактический:',
			style: 'position:absolute;left:8px;top:306px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресФактический',
			style: 'position:absolute;left:145px;top:306px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефонДомашний',
			text: 'Телефон домашний:',
			style: 'position:absolute;left:8px;top:331px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонДомашний',
			style: 'position:absolute;left:145px;top:331px;width:307px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:460px;height:25px;',
			items:
			[
				'-',
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:490px;width:460px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'сотрудника',
			style: 'position:absolute;left:145px;top:181px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'родственника',
			style: 'position:absolute;left:235px;top:181px;width:217px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрахование',
			text: 'Страхование:',
			style: 'position:absolute;left:8px;top:181px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:356px;width:444px;height:126px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:145px;top:58px;width:307px;height:19px;',
		},
	]
});