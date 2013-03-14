Ext.define('Документы.ПереоценкаАктивовМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:446px;',
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
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:258px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:460px;height:25px;',
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
			style: 'position:absolute;left:0px;top:421px;width:460px;height:25px;',
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
			style: 'position:absolute;left:8px;top:153px;width:444px;height:236px;',
			height: 236,width: 444,
			items:
			[
				{
					title:'ОС и Инвестиционная собственность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:430px;height:179px;',
			height: 179,width: 430,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'ОС',
					width:'100',
				},
				{
					text:'Справедливая стоимость',
					width:'100',
				},
				{
					text:'Ликвидационная стоимость',
					width:'101',
				},
			]
		},
					]
				},
				{
					title:'НМА',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:430px;height:179px;',
			height: 179,width: 430,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'НМА',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Финансовые активы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:430px;height:179px;',
			height: 179,width: 430,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор',
					width:'120',
				},
				{
					text:'Счет учета',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:358px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:394px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:394px;width:356px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:358px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихДоходов',
			text: 'Статья прочих доходов:',
			style: 'position:absolute;left:8px;top:105px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходов',
			style: 'position:absolute;left:139px;top:105px;width:313px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихРасходов',
			text: 'Статья прочих расходов:',
			style: 'position:absolute;left:8px;top:130px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихРасходов',
			style: 'position:absolute;left:139px;top:130px;width:313px;height:19px;',
		},
	]
});