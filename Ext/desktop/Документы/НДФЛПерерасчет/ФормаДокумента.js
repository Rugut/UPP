Ext.define('Документы.НДФЛПерерасчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:697px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перерасчет НДФЛ',
	
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
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Перерасчет за:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:324px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:324px;width:593px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:593px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:9px;top:123px;width:680px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:9px;top:147px;width:680px;height:171px;',
			height: 171,width: 680,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Физическое лицо',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'По ставке 13 (30)%',
					width:'80',
				},
				{
					text:'Вычет личный',
					width:'80',
				},
				{
					text:'Вычеты на детей',
					width:'360',
				},
				{
					text:'...на первого',
					width:'60',
				},
				{
					text:'  двойной',
					width:'60',
				},
				{
					text:' второй',
					width:'60',
				},
				{
					text:'...на второго',
					width:'60',
				},
				{
					text:' двойной',
					width:'60',
				},
				{
					text:' второй',
					width:'60',
				},
				{
					text:'... на третьего ',
					width:'60',
				},
				{
					text:'  двойной',
					width:'60',
				},
				{
					text:' второй',
					width:'60',
				},
				{
					text:'...инвалидов',
					width:'60',
				},
				{
					text:'  двойной',
					width:'60',
				},
				{
					text:' второй',
					width:'60',
				},
				{
					text:'Вычеты имущественные',
					width:'160',
				},
				{
					text:'Расходы',
					width:'80',
				},
				{
					text:'%% по кредитам',
					width:'80',
				},
				{
					text:'%% при перекредитовании',
					width:'80',
				},
				{
					text:'По ставке 9 (30)%',
					width:'80',
				},
				{
					text:'По ставке  35 (30)%',
					width:'83',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
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
				'-',
				{
					text:'Рассчитать',
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
			style: 'position:absolute;left:0px;top:376px;width:697px;height:25px;',
			items:
			[
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
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцОтражения',
			text: 'Отразить в расчетах с сотрудниками:',
			style: 'position:absolute;left:231px;top:81px;width:192px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодВзаиморасчетов',
			style: 'position:absolute;left:423px;top:81px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:96px;top:81px;width:80px;height:19px;',
		},
	]
});