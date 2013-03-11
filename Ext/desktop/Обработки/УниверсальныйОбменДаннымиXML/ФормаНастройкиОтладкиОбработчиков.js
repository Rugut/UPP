Ext.define('Обработки.УниверсальныйОбменДаннымиXML.ФормаНастройкиОтладкиОбработчиков',
	{
	extend: 'Ext.window.Window',
	height: 360,width: 567,
	iconCls: 'bogus',
	title: 'Настройка отладки обработчиков',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаВыгрузитьКодОбработчиков',
			text: 'Сформировать модуль отладки выгрузки',
			style: 'position:absolute;left:140px;top:119px;width:240px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаВнешнейОбработкиОбработчиковСобытий',
			style: 'position:absolute;left:8px;top:311px;width:551px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:567px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаОтмена',
				},
				{
					text:'КнопкаГотово',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:290px;top:25px;width:269px;height:67px;',
			height: 67,width: 269,
			items:
			[
				{
					title:'Подсказка_0',
					items:
					[
					]
				},
				{
					title:'Подсказка_1',
					items:
					[
					]
				},
				{
					title:'Подсказка_2',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОткрытьФайл',
			text: '',
			style: 'position:absolute;left:386px;top:119px;width:38px;height:27px;',
		},
	]
});