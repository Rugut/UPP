Ext.define('Документы.Опрос.ФормаВводаОтветаТекст',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:341px;height:153px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:128px;width:341px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПолеВводаТекст',
			style: 'position:absolute;left:8px;top:29px;width:325px;height:91px;',
		},
	]
});