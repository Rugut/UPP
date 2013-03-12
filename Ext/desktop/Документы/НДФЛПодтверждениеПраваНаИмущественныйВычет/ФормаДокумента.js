Ext.define('Документы.НДФЛПодтверждениеПраваНаИмущественныйВычет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:621px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подтверждение права на имущественный вычет',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:82px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:113px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:340px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:113px;top:340px;width:500px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:149px;width:605px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:173px;width:605px;height:160px;',
			height: 160,width: 605,
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
					text:'Дата',
					width:'60',
				},
				{
					text:'Расходы',
					width:'90',
				},
				{
					text:'%% по кредитам',
					width:'90',
				},
				{
					text:'%% при перекредитовании',
					width:'120',
				},
				{
					text:'Код ИФНС',
					width:'66',
				},
				{
					text:'Номер уведомления',
					width:'100',
				},
				{
					text:'Дата уведомления',
					width:'97',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:621px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:621px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:213px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:195px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Учреждение:',
			style: 'position:absolute;left:8px;top:57px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйПериод',
			text: 'Вычет по налогу за:',
			style: 'position:absolute;left:8px;top:107px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:113px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'год',
			style: 'position:absolute;left:201px;top:107px;width:25px;height:19px;',
		},
	]
});