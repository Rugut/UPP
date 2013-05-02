Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПредварительныйПросмотрПечатныхФорм',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать документов циклов обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:740px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:198px;height:319px;',
			height: 319,width: 198,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Объект',
					width:'159',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'Табличный документ',
					width:'100',
					dataIndex:'ТабличныйДокумент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Объект',
					},
					{
						name:'ТабличныйДокумент',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:25px;width:198px;height:24px;',
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				'-',
				{
					text:'Раскрыть',
				},
				{
					text:'Свернуть',
				},
				'-',
				{
					text:'Переместить вниз',
				},
				{
					text:'Переместить вверх',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:160px;top:398px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоКопий',
			text: 'Количество копий:',
			style: 'position:absolute;left:14px;top:399px;width:100px;height:18px;',
		},
	]
});