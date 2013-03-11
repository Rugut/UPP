Ext.define('Справочники.ПрофилиПолномочийПользователей.ПереносНастроекДополнительныхПрав',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 470,
	iconCls: 'bogus',
	title: 'Перенос настроек дополнительных прав',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:470px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
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
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:454px;height:281px;',
			height: 281,width: 454,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ПользовательГруппа',
				},
				{
					text:'Профиль',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
			]
		},
	]
});