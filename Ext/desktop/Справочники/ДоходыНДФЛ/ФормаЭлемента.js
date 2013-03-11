Ext.define('Справочники.ДоходыНДФЛ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 247,width: 471,
	iconCls: 'bogus',
	title: 'Код дохода для исчисления НДФЛ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:38px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:183px;top:33px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНалогообложенияРезидента',
			style: 'position:absolute;left:183px;top:86px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчетности',
			style: 'position:absolute;left:183px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:471px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:222px;width:471px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
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
			]
		},
	]
});