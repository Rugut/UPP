Ext.define('Документы.ПереоценкаВалютныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:353px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценка валютных средств',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:366px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:366px;width:249px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:318px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:318px;width:249px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать денежные средства в кассах',
			style: 'position:absolute;left:20px;top:99px;width:325px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать денежные средства на банковских счетах',
			style: 'position:absolute;left:20px;top:120px;width:325px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать взаиморасчеты с контрагентами',
			style: 'position:absolute;left:20px;top:141px;width:325px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать взаиморасчеты с подотчетными лицами',
			style: 'position:absolute;left:20px;top:162px;width:325px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:353px;height:25px;',
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
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:353px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:342px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:342px;width:249px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отражать в налог. учете',
			style: 'position:absolute;left:201px;top:207px;width:144px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:228px;width:249px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:228px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отражать в управленческом учете',
			style: 'position:absolute;left:8px;top:78px;width:200px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отражать в бухгалтерском учете',
			style: 'position:absolute;left:8px;top:207px;width:189px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценка валютных средств ',
			style: 'position:absolute;left:96px;top:252px;width:249px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценка расчетов в условных единицах',
			style: 'position:absolute;left:96px;top:273px;width:249px;height:16px;',
		},
	]
});