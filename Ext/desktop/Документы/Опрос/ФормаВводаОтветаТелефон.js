Ext.define('Документы.Опрос.ФормаВводаОтветаТелефон',
	{
	extend: 'Ext.window.Window',
	height: 153,width: 341,
	iconCls: 'bogus',
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:128px;width:341px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле1',
			style: 'position:absolute;left:87px;top:53px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле2',
			style: 'position:absolute;left:87px;top:77px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле3',
			style: 'position:absolute;left:87px;top:29px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле4',
			style: 'position:absolute;left:273px;top:29px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:101px;width:246px;height:19px;',
		},
	]
});