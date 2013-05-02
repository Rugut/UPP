Ext.define('Документы.ОперацияМеждународная.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:450px;',
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
			style: 'position:absolute;left:98px;top:398px;width:547px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:338px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:425px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:637px;height:24px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
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
			style: 'position:absolute;left:0px;top:425px;width:653px;height:25px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:637px;height:261px;',
			height: 261,width: 637,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'56',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'СубконтоДт1',
					width:'95',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'СубконтоДт2',
					width:'95',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'СубконтоДт3',
					width:'95',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'41',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма',
					width:'93',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Количество',
					width:'98',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'78',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'СубконтоКт1',
					width:'98',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'СубконтоКт2',
					width:'98',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'СубконтоКт3',
					width:'98',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма',
					width:'81',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Количество',
					width:'85',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'63',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'163',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ж',
					width:'24',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияМеждународная/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
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
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'КоличествоДт',
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
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'КоличествоКт',
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
});