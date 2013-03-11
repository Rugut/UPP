Ext.define('Обработки.РедактированиеКонтактнойИнформации.ФормаЗаписиТелефона',
	{
	extend: 'Ext.window.Window',
	height: 257,width: 330,
	iconCls: 'bogus',
	title: 'Телефон',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле1',
			style: 'position:absolute;left:102px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле2',
			style: 'position:absolute;left:102px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле3',
			style: 'position:absolute;left:102px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле4',
			style: 'position:absolute;left:262px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:205px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:330px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:232px;width:330px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вид',
			style: 'position:absolute;left:102px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:177px;width:220px;height:19px;',
		},
	]
});