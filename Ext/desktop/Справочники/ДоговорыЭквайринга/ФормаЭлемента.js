Ext.define('Справочники.ДоговорыЭквайринга.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 439,
	iconCls: 'bogus',
	title: 'Договор эквайринга',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:369px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:33px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Эквайрер',
			style: 'position:absolute;left:148px;top:56px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Договор',
			style: 'position:absolute;left:148px;top:79px;width:281px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:421px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:421px;height:114px;',
			height: 114,width: 421,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидОплаты',
				},
				{
					text:'ПроцентТорговойУступки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:439px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
	]
});