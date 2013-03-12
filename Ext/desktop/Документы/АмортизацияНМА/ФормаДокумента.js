Ext.define('Документы.АмортизацияНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:598px;height:186px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Амортизация НМА',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
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
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:143px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:83px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:83px;width:492px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:108px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:108px;width:492px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:134px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:134px;width:492px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:598px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:161px;width:598px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:180px;top:58px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:259px;top:58px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:98px;top:58px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:346px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:453px;top:33px;width:137px;height:19px;',
		},
	]
});