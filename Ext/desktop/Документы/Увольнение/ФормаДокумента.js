Ext.define('Документы.Увольнение.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:410px;height:404px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Увольнение',
	
	items:
	[
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Открыть свойства',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Открыть категории',
				},
				{
					text:'Увольнение из организаций',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:352px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:352px;width:306px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:394px;height:220px;',
			height: 220,width: 394,
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
					text:'Дата увольнения',
					width:'100',
				},
				{
					text:'Причина',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:394px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Уволенными из организаций',
				},
				{
					text:'Действие11',
				},
				{
					text:'Списком cотрудников',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:410px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
	]
});