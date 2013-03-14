Ext.define('Документы.РасчетСебестоимостиВыпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:363px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет себестоимости',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:363px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:363px;height:25px;',
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
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:187px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:107px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:207px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:109px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:109px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Месяц расчета:',
			style: 'position:absolute;left:8px;top:58px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:107px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:173px;width:347px;height:233px;',
			height: 233,width: 347,
			items:
			[
				{
					title:'Выполняемые действия',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:333px;height:177px;',
			height: 177,width: 333,
			columns:
			[
				{
					text:'Порядок',
					width:'49',
				},
				{
					text:'Выполняемое действие',
					width:'244',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:333px;height:24px;',
			items:
			[
				{
					text:'Список действий',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:89px;top:6px;width:250px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать общепроизводственные расходы при распределении по переделам',
			style: 'position:absolute;left:6px;top:47px;width:333px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:347px;height:19px;',
			height: 19,width: 347,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Расширенная аналитика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчетеРасширеннаяАналитика',
			text: 'Отразить в:',
			style: 'position:absolute;left:0px;top:0px;width:94px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:99px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'бух. и нал. учете',
			style: 'position:absolute;left:168px;top:0px;width:157px;height:19px;',
		},
					]
				},
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:82px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:151px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:220px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'МСФО',
			style: 'position:absolute;left:289px;top:0px;width:57px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНастройкаЗакрытияМесяца',
			text: 'Настройка закрытия месяца:',
			style: 'position:absolute;left:8px;top:137px;width:94px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаЗакрытияМесяца',
			style: 'position:absolute;left:107px;top:137px;width:248px;height:19px;',
		},
	]
});