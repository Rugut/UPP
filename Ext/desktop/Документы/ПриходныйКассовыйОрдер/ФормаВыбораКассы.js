Ext.define('Документы.ПриходныйКассовыйОрдер.ФормаВыбораКассы',
	{
	extend: 'Ext.window.Window',
	height: 108,width: 400,
	iconCls: 'bogus',
	title: 'Укажите кассу поступления денежных средств',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:33px;width:294px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:98px;top:56px;width:294px;height:19px;',
		},
	]
});