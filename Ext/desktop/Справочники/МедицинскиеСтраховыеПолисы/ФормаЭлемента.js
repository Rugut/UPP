Ext.define('Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 515,width: 460,
	iconCls: 'bogus',
	title: 'Медицинский страховой полис',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:145px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:372px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:145px;top:33px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтрахования',
			style: 'position:absolute;left:145px;top:83px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиПолиса',
			style: 'position:absolute;left:145px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПолиса',
			style: 'position:absolute;left:372px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрограммаСтрахования',
			style: 'position:absolute;left:145px;top:108px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родственник',
			style: 'position:absolute;left:145px;top:205px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:145px;top:256px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:372px;top:256px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УдостоверениеЛичностиПредставление',
			style: 'position:absolute;left:145px;top:281px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресФактический',
			style: 'position:absolute;left:145px;top:306px;width:307px;height:19px;',
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
				{
					text:'Файлы',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:490px;width:460px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:356px;width:444px;height:126px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:145px;top:58px;width:307px;height:19px;',
		},
	]
});