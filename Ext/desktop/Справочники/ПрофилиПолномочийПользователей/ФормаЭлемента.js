Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 631,
	iconCls: 'bogus',
	title: 'Профиль полномочий пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:631px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДействиеПоказатьПользователейСТекущимПрофилем',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеКатегории',
				},
				{
					text:'Действие1',
				},
				{
					text:'РазделительАдминистрирование',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'ПодменюАдминистрированиеПользователей',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеНазначитьПрофильПользователям',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:631px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:271px;height:236px;',
			height: 236,width: 271,
			columns:
			[
				{
					text:'ИмяРоли',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:290px;top:132px;width:333px;height:236px;',
			height: 236,width: 333,
			columns:
			[
				{
					text:'Право',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:290px;top:108px;width:333px;height:24px;',
			items:
			[
				{
					text:'ДействиеКопироватьПрава',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:271px;height:24px;',
			items:
			[
				{
					text:'ДействиеИзменить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:57px;width:186px;height:19px;',
		},
	]
});