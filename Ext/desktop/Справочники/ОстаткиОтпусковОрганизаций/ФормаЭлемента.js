Ext.define('Справочники.ОстаткиОтпусковОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:346px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:346px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:346px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:330px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:330px;height:315px;',
			height: 315,width: 330,
			items:
			[
				{
					title:'Один отпуск',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаОстатков',
			text: 'Дата остатков:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатков',
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков1',
			text: 'Дата, на которую вводятся остатки. С даты, следующей после даты остатков, начнется новый рабочий год. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты остатков.',
			style: 'position:absolute;left:10px;top:25px;width:320px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДней',
			text: 'Количество дней:',
			style: 'position:absolute;left:0px;top:84px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДней',
			style: 'position:absolute;left:96px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДетальныйВвод',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:239px;top:82px;width:91px;height:21px;',
		},
					]
				},
				{
					title:'Несколько отпусков',
					items:
					[
		{
			xtype: 'button',
			name: 'ДетальныйВвод1',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОстатков1',
			text: 'Дата остатков:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатковПоВидамОтпусков',
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков3',
			text: 'Дата, на которую вводятся остатки. С даты, следующей после даты остатков, начнется новый рабочий год. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты остатков.',
			style: 'position:absolute;left:10px;top:25px;width:320px;height:52px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:111px;width:330px;height:178px;',
			height: 178,width: 330,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'180',
				},
				{
					text:'Количество дней',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:82px;width:210px;height:24px;',
			items:
			[
				{
					text:'Рассчитать',
				},
			]
		},
					]
				},
				{
					title:'Отпуска с рабочими годами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:330px;height:206px;',
			height: 206,width: 330,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'100',
				},
				{
					text:'Год работы',
					width:'100',
				},
				{
					text:'С',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
				{
					text:'Количество дней',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:210px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'Добавить',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПростойВвод',
			text: '<< Простой ввод остатков',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков2',
			text: 'В табличной части указываются остатки в разрезе рабочих лет. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты окончания САМОГО ПОСЛЕДНЕГО рабочего года.',
			style: 'position:absolute;left:10px;top:236px;width:320px;height:53px;',
		},
					]
				},
			]
		},
	]
});