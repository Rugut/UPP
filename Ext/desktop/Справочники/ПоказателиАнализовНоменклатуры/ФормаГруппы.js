Ext.define('Справочники.ПоказателиАнализовНоменклатуры.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:85px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа Показатели анализов номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:275px;top:33px;width:26px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:304px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:177px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:60px;width:400px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
			]
		},
	]
});