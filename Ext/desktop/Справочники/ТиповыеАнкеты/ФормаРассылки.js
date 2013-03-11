Ext.define('Справочники.ТиповыеАнкеты.ФормаРассылки',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 473,
	iconCls: 'bogus',
	title: 'Рассылка анкеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:473px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:473px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Отправить',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:457px;height:254px;',
			height: 254,width: 457,
			items:
			[
				{
					title:'Страница1',
				},
				{
					title:'Страница3',
				},
				{
					title:'Страница2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Анкета',
			style: 'position:absolute;left:90px;top:33px;width:375px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:457px;height:43px;',
			height: 43,width: 457,
			items:
			[
				{
					title:'ВнешнийПочтовыйКлиент',
				},
				{
					title:'ВстроенныйПочтовыйКлиент',
				},
			]
		},
	]
});