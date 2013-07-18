Ext.require(['Данные.Справочники.ОтправкиФСС'], function () 
{
	Ext.define('Справочники.ОтправкиФСС.ФормаАвтозапроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:367px;height:103px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Автообмен с сервером ФСС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОтчет',
			text: 'Отчет:',
			style: 'position:absolute;left:8px;top:8px;width:33px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтправки1',
			text: 'Дата отправки:',
			style: 'position:absolute;left:8px;top:26px;width:79px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчетПредставление',
			text: '',
			style: 'position:absolute;left:45px;top:8px;width:314px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДатаОтправки',
			text: '',
			style: 'position:absolute;left:91px;top:26px;width:268px;height:15px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:44px;width:351px;height:51px;',
			height: 51,width: 351,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница отсчета',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОсталосьСекунд',
			text: 'Результатов отправки отчета получить не удалось. \r\nЧерез некоторое время будет предпринята ещё одна попытка (15 с)',
			style: 'position:absolute;left:0px;top:0px;width:351px;height:30px;text-align:left;',
		},
					]
				},
				{
					title:'Страница результата',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультат',
			text: '',
			style: 'position:absolute;left:0px;top:18px;width:351px;height:15px;text-align:left;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});