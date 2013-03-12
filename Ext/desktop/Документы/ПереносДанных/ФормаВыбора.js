Ext.define('Документы.ПереносДанных.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:611px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переносы данных',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:595px;height:380px;',
			height: 380,width: 595,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Период регистрации',
					width:'110',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие9',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
	]
});