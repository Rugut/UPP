Ext.define('Документы.ОпределениеФинансовыхРезультатов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:345px;height:309px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:139px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:81px;width:239px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрытие счета 90',
			style: 'position:absolute;left:8px;top:151px;width:115px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрытие счета 91',
			style: 'position:absolute;left:8px;top:171px;width:115px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:345px;height:25px;',
			items:
			[
				{
					text:'Перейти',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:284px;width:345px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:98px;top:57px;width:239px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:257px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:257px;width:241px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:234px;width:241px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Списание убытков прошлых лет',
			style: 'position:absolute;left:8px;top:191px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:8px;top:105px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:98px;top:105px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:176px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включение амортизационной премии в состав расходов',
			style: 'position:absolute;left:8px;top:211px;width:312px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расчет резервов по сомнительным долгам',
			style: 'position:absolute;left:8px;top:131px;width:239px;height:15px;',
		},
	]
});