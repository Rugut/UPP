Ext.define('Документы.Опрос.ФормаВводаОтветаАдрес',
	{
	extend: 'Ext.window.Window',
	height: 249,width: 330,
	iconCls: 'bogus',
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:102px;top:29px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:102px;top:53px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:102px;top:77px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаселенныйПункт',
			style: 'position:absolute;left:102px;top:101px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Улица',
			style: 'position:absolute;left:102px;top:125px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дом',
			style: 'position:absolute;left:102px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Корпус',
			style: 'position:absolute;left:190px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Квартира',
			style: 'position:absolute;left:286px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:197px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:330px;height:25px;',
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
			name: 'Индекс',
			style: 'position:absolute;left:102px;top:173px;width:60px;height:19px;',
		},
	]
});