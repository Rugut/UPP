Ext.define('Документы.КорректировкаСтоимостиСписанияТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:399px;height:203px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка стоимости списания товаров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:209px;top:33px;width:37px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:249px;top:33px;width:142px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:399px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:178px;width:399px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:8px;top:103px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:80px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:80px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:8px;top:57px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:96px;top:57px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:151px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:151px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:126px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:126px;width:295px;height:19px;',
		},
	]
});