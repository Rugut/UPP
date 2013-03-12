Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:988px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявления на подключение к электронному документообороту',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:988px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Ручное заполнение',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Обновить статусы заявлений',
				},
				{
					text:'И��менить статус',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Мастер заполнения',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:972px;height:399px;',
			height: 399,width: 972,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Номер',
					width:'78',
				},
				{
					text:'Дата',
					width:'89',
				},
				{
					text:'Организация',
					width:'185',
				},
				{
					text:'Статус',
					width:'97',
				},
				{
					text:'Дата отправки',
					width:'115',
				},
				{
					text:'Дата получения',
					width:'100',
				},
				{
					text:'Дополнительная информация',
					width:'187',
				},
			]
		},
	]
});