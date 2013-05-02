Ext.define('Документы.ОперацияБух.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:634px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Сумма операции:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОперации',
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:398px;width:528px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:634px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:618px;height:261px;',
			height: 261,width: 618,
			items:
			[
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:7px;width:604px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:604px;height:205px;',
			height: 205,width: 604,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'100',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'80',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'80',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма Дт',
					width:'80',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'100',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'80',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'80',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма Кт',
					width:'80',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'80',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'80',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияБух/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
					},
				]
			},
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:604px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:604px;height:205px;',
			height: 205,width: 604,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'88',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'88',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Вид учета Дт',
					width:'88',
					dataIndex:'ВидУчетаДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'136',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'136',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'136',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'95',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'95',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Вид учета Кт',
					width:'95',
					dataIndex:'ВидУчетаКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'142',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'142',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'142',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма',
					width:'124',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'124',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'124',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияБух/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетДт',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВидУчетаДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СчетКт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВидУчетаКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Содержание:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Содержание',
			style: 'position:absolute;left:98px;top:105px;width:528px;height:19px;',
		},
	]
});