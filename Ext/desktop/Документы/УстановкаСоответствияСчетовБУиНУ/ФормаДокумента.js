Ext.define('Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:594px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка соответствия счетов БУ и НУ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:245px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:245px;width:490px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:269px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:269px;width:490px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
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
			style: 'position:absolute;left:0px;top:296px;width:594px;height:25px;',
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
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:132px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:578px;height:159px;',
			height: 159,width: 578,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'№',
					width:'28',
				},
				{
					text:'Счет БУ',
					width:'79',
				},
				{
					text:'Счет корр БУ',
					width:'93',
				},
				{
					text:'Вид затрат НУ',
					width:'114',
				},
				{
					text:'Счет НУ',
					width:'85',
				},
				{
					text:'Комментарий',
					width:'91',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:578px;height:24px;',
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
});