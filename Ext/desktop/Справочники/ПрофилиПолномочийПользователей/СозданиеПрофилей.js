Ext.define('Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилей',
	{
	extend: 'Ext.window.Window',
	height: 398,width: 434,
	iconCls: 'bogus',
	title: 'Создание профилей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
			items:
			[
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'ДействиеПометитьВсе',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:434px;height:25px;',
			items:
			[
				{
					text:'ДействиеНазначитьПрофили',
				},
				{
					text:'СоздатьПрофили',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:418px;height:332px;',
			height: 332,width: 418,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Профиль',
				},
				{
					text:'РолиИПользователи',
				},
			]
		},
	]
});