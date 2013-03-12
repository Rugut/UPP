Ext.define('Документы.ПланированиеОтпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование отпуска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:484px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Утвердить все отпуска',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:484px;height:220px;',
			height: 220,width: 484,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'75',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Начало',
					width:'80',
				},
				{
					text:'Окончание',
					width:'80',
				},
				{
					text:'Состояние',
					width:'100',
				},
				{
					text:'Примечание',
					width:'200',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:18px;height:19px;',
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
			style: 'position:absolute;left:194px;top:33px;width:122px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'График отпусков организаций',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Отсутствие на рабочем месте',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:394px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:394px;width:396px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:420px;width:500px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:370px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:370px;width:396px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:347px;width:462px;height:17px;',
		},
	]
});