Ext.define('Справочники.Подразделения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:858px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Структура предприятия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:858px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:82px;width:410px;height:490px;',
			height: 490,width: 410,
			columns:
			[
				{
					text:'Наименование',
					width:'181',
				},
				{
					text:'Код',
					width:'76',
				},
				{
					text:'Подразделения юридических лиц',
					width:'207',
				},
				{
					text:'Порядок',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктураПредприятия',
			text: ' Структура Предприятия',
			style: 'position:absolute;left:8px;top:33px;width:410px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктураПодразделенийОрганизаций',
			text: ' Подразделения организаций (юридических лиц)',
			style: 'position:absolute;left:433px;top:33px;width:417px;height:20px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:433px;top:58px;width:322px;height:24px;',
			items:
			[
				{
					text:'Исключить из структурного подразделения',
				},
				{
					text:'Список организаций...',
				},
				{
					text:'Упорядочить по: Наименование',
				},
				{
					text:'Действие5',
				},
				{
					text:'Упорядочить по: Порядок',
				},
				'-',
				{
					text:'Исключить из структурного подразделения',
				},
				{
					text:'Новое подразделение',
				},
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Редактировать подразделение <наименование подразделения>',
				},
				{
					text:'Переместить вниз',
				},
				{
					text:'Переместить вверх',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Действие включить в подразделение',
				},
				'-',
				{
					text:'Действие включить в подразделение',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Упорядочить по: Код',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:58px;width:410px;height:24px;',
			items:
			[
				{
					text:'Редактировать <наименование подразделения>',
				},
				{
					text:'Доступ к текущему элементу',
				},
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Переместить вверх',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Переместить вниз',
				},
				{
					text:'Действие1',
				},
				{
					text:'Новое структурное подразделение',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:433px;top:82px;width:417px;height:490px;',
			height: 490,width: 417,
			columns:
			[
				{
					text:'Организация',
					width:'137',
				},
				{
					text:'Наименование',
					width:'195',
				},
				{
					text:'Код',
					width:'65',
				},
				{
					text:'Подразделения',
					width:'135',
				},
				{
					text:'Несколько подразделений',
					width:'100',
				},
				{
					text:'Порядок',
					width:'49',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:755px;top:58px;width:95px;height:24px;',
			items:
			[
				{
					text:'Организации...',
				},
			]
		},
	]
});