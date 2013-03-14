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
				},
				{
					text:'N',
					width:'28',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто Дт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Количество Дт',
					width:'80',
				},
				{
					text:'Валюта Дт',
					width:'80',
				},
				{
					text:'Вал. сумма Дт',
					width:'80',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Количество Кт',
					width:'80',
				},
				{
					text:'Валюта Кт',
					width:'80',
				},
				{
					text:'Вал. сумма Кт',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Содержание',
					width:'80',
				},
				{
					text:'№ журнала',
					width:'80',
				},
			]
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
				},
				{
					text:'N',
					width:'28',
				},
				{
					text:'Счет Дт',
					width:'88',
				},
				{
					text:'Количество Дт',
					width:'88',
				},
				{
					text:'Вид учета Дт',
					width:'88',
				},
				{
					text:'Субконто Дт',
					width:'136',
				},
				{
					text:'',
					width:'136',
				},
				{
					text:'',
					width:'136',
				},
				{
					text:'Счет Кт',
					width:'95',
				},
				{
					text:'Количество Кт',
					width:'95',
				},
				{
					text:'Вид учета Кт',
					width:'95',
				},
				{
					text:'Субконто Кт',
					width:'142',
				},
				{
					text:'',
					width:'142',
				},
				{
					text:'',
					width:'142',
				},
				{
					text:'Сумма',
					width:'124',
				},
				{
					text:'Содержание',
					width:'124',
				},
				{
					text:'№ журнала',
					width:'124',
				},
			]
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