Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:422px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка соответствия счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:397px;width:740px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:43px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:131px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:151px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:345px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:345px;width:636px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:370px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:370px;width:636px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:724px;height:283px;',
			height: 283,width: 724,
			items:
			[
				{
					title:'Соответствия счетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:710px;height:227px;',
			height: 227,width: 710,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Счет хозрасчетный',
					width:'74',
				},
				{
					text:'Вид движения',
					width:'107',
				},
				{
					text:'Субконто хозр.',
					width:'182',
				},
				{
					text:'',
					width:'182',
				},
				{
					text:'',
					width:'182',
				},
				{
					text:'Счет международный',
					width:'69',
				},
				{
					text:'Субконто межд.',
					width:'128',
				},
				{
					text:'',
					width:'128',
				},
				{
					text:'',
					width:'128',
				},
				{
					text:'Реквизит',
					width:'103',
				},
				{
					text:'Значение',
					width:'103',
				},
				{
					text:'Комментарий',
					width:'85',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:710px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить Флажки',
				},
				{
					text:'Снять Флажки',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Исключения проводок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:710px;height:227px;',
			height: 227,width: 710,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Счет Дт',
					width:'55',
				},
				{
					text:'Субконто Дт 1',
					width:'224',
				},
				{
					text:'Субконто Дт 2',
					width:'224',
				},
				{
					text:'Субконто Дт 3',
					width:'224',
				},
				{
					text:'Счет Кт',
					width:'58',
				},
				{
					text:'Субконто Кт 1',
					width:'142',
				},
				{
					text:'Субконто Кт 2',
					width:'142',
				},
				{
					text:'Субконто Кт 3',
					width:'142',
				},
				{
					text:'Комментарий',
					width:'206',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:710px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить Флажки',
				},
				{
					text:'Снять Флажки',
				},
				'-',
			]
		},
					]
				},
			]
		},
	]
});